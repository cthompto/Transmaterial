#!/usr/bin/env python

import sys
import time
from envirophat import analog


def main():
        try:
                while True:
                        heart = "{:.3f}".format(analog.read(0))
                        print(heart)
                        sys.stdout.flush()
                        time.sleep(.1)
        except Keyboard:
                close()

main()