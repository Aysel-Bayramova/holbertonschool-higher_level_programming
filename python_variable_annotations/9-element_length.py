#!/usr/bin/env python3
"""Module to annotate an iterable function."""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with each element and its length."""
    return [(i, len(i)) for i in lst]
