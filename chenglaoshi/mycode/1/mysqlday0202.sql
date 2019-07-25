#设置客户端连接数据库
set names utf8;
#丢弃数据库，如果存在
drop database if exists xz;
#创建数据库设置数据库编码
create database xz charset=utf8;
use xz;
create table laptop_familu(
    fid smallint primary key,
    fname varchar(8),
    laptopCount int 
    #最后一行没有逗号
);
#插入数据
insert into laptop_familu values('10','联想','2');
insert into laptop_familu values('20','戴尔','2');
insert into laptop_familu values('30','小米','3');

#创建保存笔记本的表
create table laptop(
    lid int primary key,
    title varchar(128),
    price decimal(7,2),
    spec varchar(32),
    detail varchar(3000),
    shelfTime date,
    isOnsale bool,
    familyid smallint
);

insert into laptop values 
('1','小米笔记本','3999','游戏本','详情一','2018-12-1','1','30');
insert into laptop values 
('2','华硕笔记本','3929','游戏本','详情二','2018-12-1','1','20');
insert into laptop values 
('3','联想笔记本','3199','游戏本','详情三','2018-12-1','1','10');