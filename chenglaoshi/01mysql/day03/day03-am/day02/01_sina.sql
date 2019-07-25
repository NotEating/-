#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库sina,如果存在的话
DROP DATABASE IF EXISTS sina;
#创建数据库sina，设置编码utf8
CREATE DATABASE sina CHARSET=UTF8;
#进入数据库sina
USE sina;
#创建保存新闻数据的表news
CREATE TABLE news(
  nid INT,
  title VARCHAR(32),
  ctime VARCHAR(10),  #2019-07-02
  content VARCHAR(3000),
  author VARCHAR(8),
  origin VARCHAR(8)
);
#插入数据
INSERT INTO news VALUES('1','标题一','2019-7-2','特朗普暴毙','张三','美国时报');
INSERT INTO news VALUES('2','标题二','2019-6-27','谷歌倒闭','李四','街边小报');


