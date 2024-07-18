create table time_slot (
  id int unsigned primary key auto_increment not null,
  datetime VARCHAR(50) not null
);

create table field (
  id int unsigned primary key auto_increment not null,
  name varchar(80) not null,
  icon varchar(255) not null
);

create table lawyer (
  id int unsigned primary key auto_increment not null,
  firstname varchar(80) not null,
  lastname varchar(80) not null,
  role varchar(80) not null,
  picture varchar(255) not null,
  field_id int unsigned not null,
  foreign key(field_id) references field(id)
);

create table client (
  id int unsigned primary key auto_increment not null,
  firstname varchar(80) not null,
  lastname varchar(80) not null,
  email varchar(255) not null,
  phone_number VARCHAR(20) null,
  lawyer_id int unsigned null,
  foreign key(lawyer_id) references lawyer(id)
);

create table appointment (
  id int unsigned primary key auto_increment not null,
  is_first_time boolean not null,
  note text null,
  status VARCHAR(20) not null,
  field_id int unsigned not null,
  foreign key(field_id) references field(id),
  client_id int unsigned not null,
  foreign key(client_id) references client(id),
  lawyer_id int unsigned null,
  foreign key(lawyer_id) references lawyer(id),
  time_slot_id int unsigned null,
  foreign key(time_slot_id) references time_slot(id)
);

create table time_slot_lawyer (
  is_available boolean not null default true,
  time_slot_id int unsigned not null,
  lawyer_id int unsigned not null,
  PRIMARY KEY (time_slot_id, lawyer_id),
  foreign key(time_slot_id) references time_slot(id),
  foreign key(lawyer_id) references lawyer(id)
);