import virtkey
import time

v = virtkey.virtkey()
v.press_keysym(65507) #Ctrl键位
v.press_unicode(ord('r')) #模拟字母r
v.release_unicode(ord('r'))
v.release_keysym(65507)
time.sleep(5)
