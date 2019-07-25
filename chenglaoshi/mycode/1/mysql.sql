set names utf8;
drop database if exists yc;
create database yc charset=utf8;
use yc;
create table dept(
    did smallint primary key auto_increment,
    dname varchar(8) not null
);
create table emp(
    eid int primary key auto_increment,
    ename varchar(8),
    sex bool,
    salary decimal(7,2),
    deptid smallint,
    foreign key(deptid) references dept(did)
    
);