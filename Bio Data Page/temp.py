#!/usr/bin/env python

import sys
import time
from envirophat import weather


def main():
        try:
                while True:
                        temp = weather.temperature()
                        print(temp)
                        sys.stdout.flush()
                        time.sleep(10)
        except Keyboard:
                close()

main()