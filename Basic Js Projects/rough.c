SQL> spoolC:\Users\Lenovo\Documents\Sql\test_2005150;
SP2-0734: unknown command beginning "spoolC:\Us..." - rest of line ignored.
SQL> spool C:\Users\Lenovo\Documents\Sql\test_2005150;
SQL> create table employee_5150(
  2  EMPNO number(4,0) CONSTRAINT pk2 PRIMARY KEY,
  3  ENAME varchar2(10) Constraint n1 NOT NULL,
  4  JOB varchar2(9) Constraint n2 NOT NULL,
  5  MGR number(4,0),
  6  HIREDATE date,
  7  SAL number(7,2),
  8  COMM number(7,2),
  9  DEPTNO number(2,0),
 10  CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO));
CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO))
                                             *
ERROR at line 10:
ORA-00942: table or view does not exist


SQL> create table employee_5150(
  2  EMPNO number(4,0) CONSTRAINT pk2 PRIMARY KEY,
  3  ENAME varchar2(10) Constraint n1 NOT NULL,
  4  JOB varchar2(9) Constraint n2 NOT NULL,
  5  MGR number(4,0),
  6  HIREDATE date,
  7  SAL number(7,2),
  8  COMM number(7,2),
  9  DEPTNO number(2,0),
 10  CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO));
CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO))
                                             *
ERROR at line 10:
ORA-00942: table or view does not exist


SQL> create table employee_5150(EMPNO number(4,0) CONSTRAINT pk2 PRIMARY KEY,ENAME varchar2(10) Constraint n1 NOT NULL,JOB varchar2(9) Constraint n2 NOT NULL,MGR number(4,0),
  2  HIREDATE date,SAL number(7,2),COMM number(7,2),DEPTNO number(2,0),CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO));
HIREDATE date,SAL number(7,2),COMM number(7,2),DEPTNO number(2,0),CONSTRAINT fk FOREIGN KEY(DEPTNO) REFERENCES department_5183(DEPTNO))
                                                                                                               *
ERROR at line 2:
ORA-00942: table or view does not exist


SQL> create table employee_5150(EMPNO number(4,0) CONSTRAINT pk2 PRIMARY KEY,ENAME varchar2(10) Constraint n1 NOT NULL,JOB varchar2(9) Constraint n2 NOT NULL,MGR number(4,0),
  2  HIREDATE date,SAL number(7,2),COMM number(7,2),DEPTNO number(2,0));

Table created.

SQL>
SQL>
SQL> insert into employee_5150 values(7369,'SMITH','CLERK',7902,'17-DEC-80',800,NULL,20);

1 row created.

SQL> insert into employee_5150 values(7521,'WARD','SALESMAN',7698,'22-FEB-81',1250,500,30);

1 row created.

SQL> insert into employee_5150 values(7654,'MARTIN','SALESMAN',7698,'28-SEP-81',1250,1400,30);

1 row created.

SQL> insert into employee_5150 values(7566,'JONES','MANAGER',7839,'02-APR-81',2975,NULL,20);

1 row created.

SQL> insert into employee_5150 values(7499,'ALLEN','SALESMAN',7698,'20-FEB-81',1600,300,30);

1 row created.

SQL> insert into employee_5150 values(7839,'KING','PRESIDENT',NULL,'17-NOV-81',5000,NULL,10);

1 row created.

SQL> insert into employee_5150 values(7698,'BLAKE','MANAGER',7839,'01-MAY-81',2850,NULL,30);

1 row created.

SQL> insert into employee_5150 values(7788,'SCOTT','ANALYST',7566,'19-APR-87',3000,NULL,20);

1 row created.

SQL> insert into employee_5150 values(7782,'CLARK','MANAGER',7839,'09-JUN-81',2450,NULL,10);

1 row created.

SQL> insert into employee_5150 values(7900,'JAMES','CLERK',7698,'03-DEC-81',950,NULL,30);

1 row created.

SQL> create table Department5150(     Deptno number(2,0),     Deptname varchar2(20),
  2       Loc varchar2(20),     constraint pk_Department5150 primary key (Deptno)    );

Table created.

SQL> Drop table department5150;

Table dropped.

SQL> create table Department5150(     Deptno number(2,0),     Deptname varchar2(20),
  2       Loc varchar2(20),     constraint pk_Department5150primary key (Deptno)    );
     Loc varchar2(20),     constraint pk_Department5150primary key (Deptno)    )
                                                                   *
ERROR at line 2:
ORA-00902: invalid datatype


SQL> create table Department5150(     Deptno number(2,0),     Deptname varchar2(20),
  2       Loc varchar2(20),     constraint pk_Department5150 primary key (Deptno)    );
create table Department5150(     Deptno number(2,0),     Deptname varchar2(20),
             *
ERROR at line 1:
ORA-00955: name is already used by an existing object


SQL> drop table department5150;

Table dropped.

SQL> create table Department5150(     Deptno number(2,0),     Deptname varchar2(20),
  2       Loc varchar2(20),     constraint pk_Department5150 primary key (Deptno)    );

Table created.


SQL>  insert into Department5150 values (10,'Accounting','New York');

1 row created.

SQL> insert into Department5150 values (20,'Research','Dallas');

1 row created.

SQL>     insert into Department5150 values (30,'Sales','Chicago');

1 row created.

SQL> insert into Department5150 values (40,'Operations','Boston');

1 row created.

SQL> select *from department5150;

    DEPTNO DEPTNAME             LOC
---------- -------------------- --------------------
        10 Accounting           New York
        20 Research             Dallas
        30 Sales                Chicago
        40 Operations           Boston

SQL> select*from employee_5150;

     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM
---------- ---------- --------- ---------- --------- ---------- ----------
    DEPTNO
----------
      7369 SMITH      CLERK           7902 17-DEC-80        800
        20

      7521 WARD       SALESMAN        7698 22-FEB-81       1250        500
        30

      7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400
        30


     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM
---------- ---------- --------- ---------- --------- ---------- ----------
    DEPTNO
----------
      7566 JONES      MANAGER         7839 02-APR-81       2975
        20

      7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300
        30

      7839 KING       PRESIDENT            17-NOV-81       5000
        10


     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM
---------- ---------- --------- ---------- --------- ---------- ----------
    DEPTNO
----------
      7698 BLAKE      MANAGER         7839 01-MAY-81       2850
        30

      7788 SCOTT      ANALYST         7566 19-APR-87       3000
        20

      7782 CLARK      MANAGER         7839 09-JUN-81       2450
        10


     EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM
---------- ---------- --------- ---------- --------- ---------- ----------
    DEPTNO
----------
      7900 JAMES      CLERK           7698 03-DEC-81        950
        30


10 rows selected.

SQL> spool off;