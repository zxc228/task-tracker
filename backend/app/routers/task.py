from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.database import SessionLocal
from app.models.task import Task
from app.schemas.task import TaskCreate, TaskRead, TaskUpdate

from typing import Optional
from sqlalchemy import and_

from datetime import datetime

from app.services.user import get_current_user
from app.models.user import User

router = APIRouter(prefix="/tasks", tags=["Tasks"])


# Dependency
async def get_db():
    async with SessionLocal() as session:
        yield session


@router.post("/", response_model=TaskRead)
async def create_task(task: TaskCreate, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_task = Task(**task.dict(), user_id=current_user.id)
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task



@router.get("/", response_model=list[TaskRead])
async def read_tasks(
    is_completed: Optional[bool] = None,
    priority: Optional[int] = None,
    due_before: Optional[datetime] = None,
    db: AsyncSession = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    query = select(Task).where(Task.user_id == current_user.id)

    filters = []
    if is_completed is not None:
        filters.append(Task.is_completed == is_completed)
    if priority is not None:
        filters.append(Task.priority == priority)
    if due_before is not None:
        filters.append(Task.due_date != None)
        filters.append(Task.due_date <= due_before)

    if filters:
        query = query.where(and_(*filters))

    result = await db.execute(query)
    tasks = result.scalars().all()
    return tasks


@router.get("/{task_id}", response_model=TaskRead)
async def read_task(task_id: int, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
    result = await db.execute(select(Task).where(Task.id == task_id, Task.user_id == current_user.id))
    task = result.scalar_one_or_none()
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@router.put("/{task_id}", response_model=TaskRead, )
async def update_task(task_id: int, updated: TaskUpdate, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
    result = await db.execute(select(Task).where(Task.id == task_id, Task.user_id == current_user.id))
    task = result.scalar_one_or_none()
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    for key, value in updated.dict(exclude_unset=True).items():
        setattr(task, key, value)

    await db.commit()
    await db.refresh(task)
    return task


@router.delete("/{task_id}")
async def delete_task(task_id: int, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
    result = await db.execute(select(Task).where(Task.id == task_id, Task.user_id == current_user.id))
    task = result.scalar_one_or_none()
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    await db.delete(task)
    await db.commit()
    return {"detail": "Task deleted"}