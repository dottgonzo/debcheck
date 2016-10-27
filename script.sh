#!/bin/sh

if dpkg-query -Wf'${db:Status-abbrev}' "$1" 2>/dev/null | grep -q '^i'; then
    echo -n true
else
    echo -n false
fi