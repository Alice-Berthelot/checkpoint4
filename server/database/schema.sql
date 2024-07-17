create table time_slot (
  id int unsigned primary key auto_increment not null,
  date DATE not null,
  time TIME not null
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
  phone_number int not null
);

create table appointment (
  id int unsigned primary key auto_increment not null,
  is_first_time boolean not null,
  note text null,
  field_id int unsigned not null,
  foreign key(field_id) references field(id),
  client_id int unsigned not null,
  foreign key(client_id) references client(id)
);

create table client_lawyer (
  client_id int unsigned not null,
  lawyer_id int unsigned not null,
  PRIMARY KEY (client_id, lawyer_id),
  foreign key(client_id) references client(id),
  foreign key(lawyer_id) references lawyer(id)
);

create table time_slot_lawyer (
  time_slot_id int unsigned not null,
  lawyer_id int unsigned not null,
  PRIMARY KEY (time_slot_id, lawyer_id),
  foreign key(time_slot_id) references time_slot(id),
  foreign key(lawyer_id) references lawyer(id)
);

create table time_slot_appointment (
  time_slot_id int unsigned not null,
  appointment_id int unsigned not null,
  PRIMARY KEY (time_slot_id, appointment_id),
  foreign key(time_slot_id) references time_slot(id),
  foreign key(appointment_id) references appointment(id)
);