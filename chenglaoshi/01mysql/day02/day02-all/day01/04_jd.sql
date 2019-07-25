#丢弃数据库jd，如果存在的话
DROP DATABASE IF EXISTS jd;
#创建数据库jd
CREATE DATABASE jd;
#进入创建的数据库
USE jd;
#创建保存学生数据的表student
CREATE TABLE student(
  sid INT,  #integer
  name VARCHAR(8),
  sex VARCHAR(1),  #m->男  f->女 
  score INT
);
#插入数据
INSERT INTO student VALUES('1','tom','m','85');
INSERT INTO student VALUES('2','jerry','f','92');
INSERT INTO student VALUES('3','king','m','78');
INSERT INTO student VALUES('4','张三','m','87');
#修改数据
UPDATE student SET name='zhang',score='97' WHERE sid='4';
#删除数据
DELETE FROM student WHERE sid='3';

#查询数据
SELECT * FROM student;







