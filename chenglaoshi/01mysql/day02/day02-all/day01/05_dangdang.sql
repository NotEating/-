#丢弃数据库dangdang，如果存在
DROP DATABASE IF EXISTS dangdang;
#创建数据库dangdang
CREATE DATABASE dangdang;
#进入该数据库
USE dangdang;
#创建保存图书数据的表book
CREATE TABLE book(
  bid INT,
  title VARCHAR(16),
  price INT
);
#添加数据
INSERT INTO book VALUES('1','one','86');
INSERT INTO book VALUES('2','two','78');
#查询数据
SELECT * FROM book;
