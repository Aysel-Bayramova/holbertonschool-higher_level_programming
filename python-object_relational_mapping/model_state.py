#!/usr/bin/python3
"""
Contains State class and Base, an instance of declarative_base().
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class State(Base):
    """
    State class that links to the MySQL table states.
    """
    __tablename__ = 'states'

    id = Column(Integer, primary key=True, nullable=False)
    name = Column(String(128), nullable=False)
