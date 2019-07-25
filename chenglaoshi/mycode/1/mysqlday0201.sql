set names utf8;
drop database if exists xz;
create database xz charset=utf8;
use xz;
create table laptop(
    lid int,
    title varchar(128),
    price decimal(7,2),
    stockCount smallint,
    sheifTime date,
    isIndex bool
);
insert into laptop values
('1','小米AIR','39','600','2018-12-1',true),
('2','小米AIR','38','610','2018-12-1',true);
insert into lapat values('3','小米别说话','22','788','2019-7-8',false );
update laptop set title='小米8' where lid='2';

delete from laptop where lid='3';