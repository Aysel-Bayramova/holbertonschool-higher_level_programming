#!/usr/bin/python3
"""
This module defines the State class and an instance of Base.
It maps the State class to the MySQL 'states' table using SQLAlchemy.
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class State(Base):
    """
    State class inherits from Base and links to MySQL table 'states'.

    Attributes:
        id (int): Auto-generated, unique integer, primary key, cannot be null.
        name (str): String with maximum 128 characters, cannot be null.
    """
    __tablename__ = 'states'

    id = Column(Integer, primary key=True, nullable=False, autoincrement=True)
    name = Column(String(128), nullable=False)
