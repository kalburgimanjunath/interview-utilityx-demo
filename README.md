Database Writeup as follows,

1.How would you model the above scenario
Ans:The following entity models i can think of 
interface Task{
id,
title,
description,
createdAt,
updatedAt,
deletedAt,
assignedTo,
dueDate
}
interface Column{
id:status,
title
}
interface KanBanBoard{
name,
columns,
tasks
}


2.What tables needs to be created?
KanBanBoard,Column primary(board_id),Task primary(column_id,assigned_to)

3.How are these tables related to each other
KanBanBoard{
  board1{
    column1{
    },
    column2{
    },
    tasks{
      title,
      status:"To_do"
    }
  }
  

API end points
1. For Tasks
Endpoint   method  
/tasks     GET
/tasks/:id GET
/task    POST          Add
/task/:id PUT/DELETE

2.For Column

Endpoint   method  
/column     GET
/column/:id GET
/column    POST        Add
/column/:id PUT/DELETE

3.For KanBanBoard

Endpoint   method  
/board     GET
/board/:id GET
/board     POST         Add
/board/:id PUT/DELETE

If a user can create and edit stages for particular board.

Open>In Progress > Done if they want to changes stages only required values for the status to be updated

If users wants to comment on task then you need entity
Comments{
id,
commentedBy,
task_id,
comment,
createdAt,
updatedAt,
deletedAt
}

