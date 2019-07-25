#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS tedu;
#创建数据库
CREATE DATABASE tedu CHARSET=UTF8;
#进入创建的数据库
USE tedu;
#创建保存部门数据的表dept
CREATE TABLE dept(
  did SMALLINT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(8) NOT NULL
);
#创建保存员工数据的表emp
CREATE TABLE emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(8),
  sex BOOL,
  birthday DATE,
  salary DECIMAL(7,2),
  deptId SMALLINT,
  FOREIGN KEY(deptId) REFERENCES dept(did)
);







