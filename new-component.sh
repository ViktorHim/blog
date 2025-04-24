#!/bin/bash

# Проверяем, передано ли имя компонента
if [ $# -eq 0 ]; then
    echo "Error: Please specify component path/name"
    echo "Example 1 (standard): ./new-component.sh src/widgets/Footer"
    echo "Example 2 (with -sc): ./new-component.sh -sc Button"
    exit 1
fi

# Обработка флагов
use_scenario_sc=false
component_path=""

while getopts ":sc" opt; do
  case $opt in
    s)
      use_scenario_sc=true
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

shift $((OPTIND-1))

component_path="$1"
component_name=$(basename "$component_path")

if [ "$use_scenario_sc" = true ]; then
  # Исходный сценарий (-sc)
  mkdir -p "$component_path"
  touch "${component_path}/${component_name}.tsx"
  scss_file="${component_path}/${component_name}.module.scss"
  touch "$scss_file"
  echo ".${component_name} { }" > "$scss_file"
  echo "Component $component_name created at: $component_path"
else
  # Новый сценарий (с папкой ui и index.ts)
  mkdir -p "${component_path}/ui"
  
  # Создаем файлы компонента в папке ui
  touch "${component_path}/ui/${component_name}.tsx"
  scss_file="${component_path}/ui/${component_name}.module.scss"
  touch "$scss_file"
  echo ".${component_name} { }" > "$scss_file"
  
  # Создаем index.ts
  index_file="${component_path}/index.ts"
  touch "$index_file"
  echo "export { $component_name } from './ui/$component_name';" > "$index_file"
  
  echo "Component $component_name created with FSD structure at: $component_path"
fi