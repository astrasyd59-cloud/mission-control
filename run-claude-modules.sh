#!/bin/bash
# Mission Control Launcher
# Usage: ./run-claude-modules.sh

echo "🎛️  MISSION CONTROL v3.0"
echo "========================"
echo ""

# Menu
PS3="Select module to run: "
options=(
    "Ollama Local LLM Setup (View Guide)"
    "Ollama Local LLM Setup (Run Installer)"
    "View All Deployed Modules"
    "Exit"
)

select opt in "${options[@]}"; do
    case $opt in
        "Ollama Local LLM Setup (View Guide)")
            echo ""
            echo "🌐 Opening: https://astrasyd59-cloud.github.io/ollama-nuc-setup/"
            xdg-open "https://astrasyd59-cloud.github.io/ollama-nuc-setup/" 2>/dev/null || \
                open "https://astrasyd59-cloud.github.io/ollama-nuc-setup/" 2>/dev/null || \
                echo "Please open the URL manually in your browser"
            break
            ;;
        "Ollama Local LLM Setup (Run Installer)")
            echo ""
            cd ~/.openclaw/workspace/mission-control/ollama
            ./setup-ollama.sh
            break
            ;;
        "View All Deployed Modules")
            echo ""
            echo "📊 DEPLOYED MODULES"
            echo "==================="
            echo ""
            echo "1. Ollama Local LLM Setup"
            echo "   URL: https://astrasyd59-cloud.github.io/ollama-nuc-setup/"
            echo "   Status: ✅ Live"
            echo "   Hardware: Intel NUC6i7KYK"
            echo ""
            break
            ;;
        "Exit")
            echo "Mission Control out."
            break
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done
