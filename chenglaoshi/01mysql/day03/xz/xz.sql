#丢弃数据库xz，如果存在的话
DROP DATABASE IF EXISTS xz;
#创建数据库xz
CREATE DATABASE xz;
#进入数据库xz
USE xz;
#创建保存用户数据的表user
CREATE TABLE user(
  uid INT,
  uname VARCHAR(8),
  upwd VARCHAR(16),  #
  email VARCHAR(16),
  phone VARCHAR(11),
  sex VARCHAR(1), # m/f
  userName VARCHAR(8),
  regTime VARCHAR(10),  # 2018-12-25
  isOnline INT  #1/0
);
#插入数据
INSERT INTO user VALUES('1','dang','123456','dang@163.com','18912345678','m','林当','2018-12-25','1');
INSERT INTO user VALUES('2','jing','888888','jing@126.com','18796325874','m','李建国','2017-10-25','0');
#修改数据
UPDATE user SET sex='f',regTime='2019-1-1' WHERE uid='2';
#删除数据
DELETE FROM user WHERE uid='1';
#查询数据
SELECT * FROM user;

