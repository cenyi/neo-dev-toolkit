#!/bin/bash
# 批量修复所有语言页面的功能展示Section

pages=("ar" "es" "fr" "ja" "ko" "pt" "ru" "zh")

for page in "${pages[@]}"; do
  file="src/pages/${page}/index.astro"
  if [ ! -f "$file" ]; then
    echo "Skipping $file - not found"
    continue
  fi
  
  echo "Fixing $file..."
  
  # 备份
  cp "$file" "${file}.backup"
  
  # 使用sed进行批量替换
  sed -i 's/<h2>支持的JSON转换功能<\/h2>/<h2>{t.supportedFormatsTitle}<\/h2>/g' "$file"
  sed -i 's/<p>一站式JSON工具集，满足您的所有JSON处理需求<\/p>/<p>{t.supportedFormatsSubtitle}<\/p>/g' "$file"
  sed -i 's/<h3>📊 JSON格式化<\/h3>/<h3>{t.formatCat1Title}<\/h3>/g' "$file"
  sed -i 's/<h3>🔄 JSON转换<\/h3>/<h3>{t.formatCat2Title}<\/h3>/g' "$file"
  sed -i 's/<h3>➡️ 转换为JSON<\/h3>/<h3>{t.formatCat3Title}<\/h3>/g' "$file"
  sed -i 's/<h3>🔧 JSON工具<\/h3>/<h3>{t.formatCat4Title}<\/h3>/g' "$file"
  sed -i 's/<h3>💻 开发者工具<\/h3>/<h3>{t.formatCat5Title}<\/h3>/g' "$file"
  sed -i 's/<h3>🔒 安全特性<\/h3>/<h3>{t.formatCat6Title}<\/h3>/g' "$file"
  
  # 简化提示文字
  sed -i 's/💡 <strong>提示：<\/strong> 所有JSON处理均在浏览器本地完成，支持大型JSON文件，提供语法高亮、错误提示、智能折叠等功能。适用于开发者、数据分析师、API测试等场景。/~~注意：~~/' "$file"
  
  echo "✓ $file fixed"
done

echo "All pages fixed!"
