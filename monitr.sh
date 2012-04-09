#!/bin/sh

echo "====== MONITR SCRIPT ====="
echo "time:" `date +%Y-%m-%d_%H:%M:%S`
echo "uptime:" `uptime`
echo
echo "=== CAPTURER ===="
echo
echo "[broadcast@mediaobserver monitr]$ ssh avideo@mhc-videocapturer 'ps aux | grep vlc'"
ssh avideo@mhc-videocapturer 'ps aux | grep vlc'
echo
echo "[broadcast@mediaobserver monitr]$ ssh avideo@mhc-videocapturer 'ps aux | grep java'"
ssh avideo@mhc-videocapturer 'ps aux | grep java'
echo
echo "[broadcast@mediaobserver monitr]$ ssh avideo@mhc-videocapturer 'ps aux | grep ffmpeg'"
ssh avideo@mhc-videocapturer 'ps aux | grep ffmpeg'
echo
echo
echo "=== RADIOSERVER ===="
echo
echo "[broadcast@mediaobserver monitr]$ ssh radio@mhc-radioserver 'ps aux | grep java'"
ssh radio@mhc-radioserver 'ps aux | grep java'
echo
echo "[broadcast@mediaobserver monitr]$ ssh radio@mhc-radioserver 'df -h'"
ssh radio@mhc-radioserver 'df -h'
echo
echo "[broadcast@mediaobserver monitr]$ ssh radio@mhc-radioserver 'tail -n 5 /opt/radioserver/logs/radioserver.log'"
ssh radio@mhc-radioserver 'tail -n 5 /opt/radioserver/logs/radioserver.log'
echo
echo "[broadcast@mediaobserver monitr]$ ssh radio@mhc-radioserver 'cat /opt/radioserver/logs/restarter.log | grep restart | tail -n 5'"
ssh radio@mhc-radioserver 'cat /opt/radioserver/logs/restarter.log | grep restart | tail -n 5'
echo
echo
echo "=== VIDEOSERVER ===="
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-videoserver 'ps aux | grep java'"
ssh broadcast@mhc-videoserver 'ps aux | grep java'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-videoserver 'df -h'"
ssh broadcast@mhc-videoserver 'df -h'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-videoserver 'tail -n 5 /opt/videoserver/log/videoserver.log'"
ssh broadcast@mhc-videoserver 'tail -n 5 /opt/videoserver/log/videoserver.log'
echo
echo
echo "=== CONTROLLER ===="
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-controller 'ps aux | grep java'"
ssh broadcast@mhc-controller 'ps aux | grep java'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-controller 'tail -n 5 /opt/video24h/log/video24h.log'"
ssh broadcast@mhc-controller 'tail -n 5 /opt/video24h/log/video24h.log'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-controller 'ps aux | grep mencoder'"
ssh broadcast@mhc-controller 'ps aux | grep mencoder'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-controller 'df -h'"
ssh broadcast@mhc-controller 'df -h'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-controller 'tail -n 5 /opt/mediaobserver/controller/logs/controller.log'"
ssh broadcast@mhc-controller 'tail -n 5 /opt/mediaobserver/controller/logs/controller.log'
echo
echo
echo "=== TAPESERVER ===="
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-tapeserver 'ps aux | grep java'"
ssh broadcast@mhc-tapeserver 'ps aux | grep java'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-tapeserver 'df -h'"
ssh broadcast@mhc-tapeserver 'df -h'
echo
echo "[broadcast@mediaobserver monitr]$ ssh broadcast@mhc-tapeserver 'ls -la /dev/st0'"
ssh broadcast@mhc-tapeserver 'ls -la /dev/st0'
echo
echo
echo "=== FRONTEND ===="
echo
echo "[broadcast@mediaobserver monitr]$ ps aux | grep java"
ps aux | grep java
echo
echo "[broadcast@mediaobserver monitr]$ ps aux | grep crtmp"
ps aux | grep crtmp
echo
echo "[broadcast@mediaobserver monitr]$ df -h"
df -h
echo

