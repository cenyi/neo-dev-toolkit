#!/bin/bash
# 清理临时文件脚本
# 用于上线前的清理工作

echo "========================================"
echo "  清理临时文件 - 准备上线"
echo "========================================"
echo ""

cd C:/git/neo-dev-toolkit

# 显示将要删除的文件
echo "📋 将要删除的临时文件："
echo ""

echo "1. 日志文件 (*.log):"
find . -maxdepth 1 -type f -name "*.log" 2>/dev/null
echo ""

echo "2. 测试结果目录 (test-results/):"
if [ -d "test-results" ]; then
    echo "   - test-results/ ($(du -sh test-results 2>/dev/null | cut -f1))"
fi
echo ""

echo "3. 构建缓存 (.astro/):"
if [ -d ".astro" ]; then
    echo "   - .astro/ ($(du -sh .astro 2>/dev/null | cut -f1))"
fi
echo ""

echo "4. 调试报告和临时文档："
ls -lh debug-*.md 2>/dev/null | awk '{print "   - " $9 " (size: " $5 ")'}'
echo ""

echo "========================================"
echo "⚠️  准备删除这些文件..."
echo "========================================"
echo ""

# 删除日志文件
echo "🗑️  删除日志文件..."
rm -f *.log 2>/dev/null
echo "   已删除: $(find . -maxdepth 1 -type f -name "*.log" 2>/dev/null | wc -l) 个日志文件"
echo ""

# 删除测试结果
echo "🗑️  删除测试结果目录..."
rm -rf test-results 2>/dev/null
echo "   已删除: test-results/ 目录"
echo ""

# 删除构建缓存
echo "🗑️  删除构建缓存..."
rm -rf .astro 2>/dev/null
echo "   已删除: .astro/ 目录"
echo ""

# 删除临时测试报告
echo "🗑️  删除临时测试报告..."
rm -f debug-test-results.md 2>/dev/null
rm -f debug-analysis.md 2>/dev/null
rm -f test-results-fixed.md 2>/dev/null
rm -f extended-test.log 2>/dev/null
rm -f junit-simple.log 2>/dev/null
echo "   已删除: 临时测试报告"
echo ""

echo "========================================"
echo "✅ 临时文件清理完成！"
echo "========================================"
echo ""

# 显示保留的重要文件
echo "📁 保留的重要文件："
echo ""
echo "源代码:"
echo "   ✅ src/                  # 源代码目录"
echo "   ✅ public/               # 静态资源"
echo ""
echo "测试文件:"
echo "   ✅ tests/                # 测试用例"
echo "   ✅ playwright.config.ts # Playwright 配置"
echo ""
echo "配置文件:"
echo "   ✅ package.json          # 项目配置"
echo "   �   astro.config.mjs      # Astro 配置"
echo ""
echo "文档文件:"
echo "   ✅ README*.md            # 说明文档"
echo "   �   docs/                 # 文档目录"
echo ""
echo "部署文件:"
echo "   ✅ dist/                 # 构建输出（用于部署）"
echo ""
echo "测试脚本:"
echo "   ✅ run-tests.bat         # 一键运行脚本"
echo ""
echo "框架文档（保留）:"
echo "   ✅ TEST-FRAMEWORK.md     # 测试框架文档"
echo "   �   COMPLETE-SOLUTION.md  # 完整解决方案"
echo "   �   PROJECT-DELIVERY.md    # 交付报告"
echo ""

echo "========================================"
echo "📊 清理后的磁盘使用："
echo "========================================"
du -sh . 2>/dev/null | head -1
echo ""

echo "✅ 项目已准备好上线！"
echo ""
echo "📝 后续步骤："
echo "   1. git add ."
echo "   2. git commit -m 'chore: clean temp files before production'"
echo "   3. git push"
echo ""
