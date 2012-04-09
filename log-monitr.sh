#!/bin/sh
FOLDER="/mnt/online/systemcheck/monitr/`date +%Y`/`date +%m`/`date +%d`"
mkdir -p $FOLDER
FILE="monitr-`date +%Y-%m-%d_%H-%M-%S`.log"
/opt/mediabrowser/tools/monitr/monitr.sh > $FOLDER/$FILE
cp $FOLDER/$FILE $FOLDER/win-$FILE
unix2dos $FOLDER/win-$FILE > /dev/null 2>&1
