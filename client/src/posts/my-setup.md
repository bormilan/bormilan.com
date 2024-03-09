
# Introduction

In this post, I want to cover all the parts of my setup. I make this like a tutorial,
so I will show every steps that if the reader follows, he/she will end up having the same setup as me.

I use tmux to be able to use multiply session, and to manage these things comfortably. I love tmux, I suggest eveyone to
use it because its a hughe upgrade for a terminal.
I use zsh for configuring things and 'oh my zsh' and 'powerlevel10k' to customize the design of the terminal.

Most of the time Im using the terminal for almost everything. I write code in neovim and somethines in pure vim or vi.
You can setup neovim for scratch own your own if you like it and you want it, but Im more like using pre-made neovim setups
like AstroNvim. There are several other solutions, like NvChad or LazyNvim. I personally like AstroNvim especially its configuraion
model. The basic idea is to fork a GitHub repo, to make your own configuration and plug it in. In this way you can 
store your config remotely, and you just need to clone your repo if you want to set it up on another computer.

# Homebrew
First of all you need homebrew for managing packages. You can read about more [here](https://brew.sh/)  
Download:
```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Add it to path:
```terminal
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/[username]/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

# Terminal
Terminal is the first thing I need to mention. All things below runs in terminal so its the most important for my setup.
The basic terminal has some issues I dont want to cover here, for example it has no true color support. Therfore I prefer using another one, so lets start with it.
## iterm2
I use iterm2, because its a true color terminal, with a lot of configuration that helps a lot.
You can download it from [here](https://iterm2.com/), or just run
```terminal
brew install iterm2
```
## zsh
At first, you need to install zsh. Its a powerful shell that is built on top of bash.
```terminal
brew install zsh
```
## oh my zsh
For configuration and color themes in terminal, I use "oh my zsh". It has a lot of useful plugins and a huge number of themes. You can read more about it [here](https://ohmyz.sh/).
You can download with this command:
```terminal 
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
## powerlevel10k
Its basically a theme for zsh. The most importat in it is that it makes a cool status line in the terminal, so you can easily see where you are in your file system, and shows
some useful information about your current git repo. I think its really really useful because the if I use tmux, and I have a lot of panes open on my monitor, its difficult
to keep track which pane is in which directory, or if I have multiply panes with the same repo but each another branch, its handy to see easly the branches the pane on.  
You can download it with this: 
```bash 
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```
Then you need to set the `ZSH_THEME` field in your `~/.zshrc` file.
```terminal
ZSH_THEME="powerlevel10k/powerlevel10k"
```
You can load the changes after with this:
```terminal
source ~/.zshrc
```
After everything is good, you will see a configuration for powerlevel10k, you just need to go trough it, pick the customizations that fits you the best.
## Change iterm2 colors to a custom theme
- Open iTerm2  
- Download a color profile:  
- Open iTerm2 preferences  
- Go to Profiles > Colors  
- Import the downloaded color profile  
- Select the color profile  

You can find all the available themes [here](https://iterm2colorschemes.com/)

## Zsh plugins
I use two plugins for zsh, these are that I found useful enough to use.  
zsh-auto suggestion:
```terminal
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
zsh-syntax-highlighting
```terminal
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
And you need to set then in your `~/.zshrc` to use them.
```terminal
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```
## tmux
Tmux is one of the most powerful thins here. With it, you can open multiplie panes, windows and sessions. Session can hold windows that are a set of panes.
I love using it, since it allows to move between panes with the same keys as in neovim, I can open different terminal panes next to each other, if I want to run multiple programs
, and so on.  
For downloading, I prefer to use brew:
```terminal
brew install tmux
```
After its downloaded, you need to make a configuration file for it:
```terminal
vim ~/.tmux.conf
```
If you are not familiar with vim, just use touch(for file creation) or nano(a vim alternative) or whatever you want, but I prefer using vim in most of the time.  
This ~/.tmux.conf file will be your config that hold all the customization for your tmux.  
Now I will show my configurations all in one:
```conf
set -g default-terminal "screen-256color"

# set the horizontal splitting to 'i' instead of '%'
unbind %
bind i split-window -h

# set the vertical splitting to '-' instead of '"'
unbind '"'
bind - split-window -v

# set config reload to 'r'
unbind r
bind r source-file ~/.tmux.conf

# set some resizeing hotkeys
bind -r j resize-pane -D 5
bind -r k resize-pane -U 5
bind -r l resize-pane -R 5
bind -r h resize-pane -L 5

# to be able to use mouse if I want
set -g mouse on

# vim movements for tmux’s copy mode
set-window-option -g mode-keys vi

bind-key -T copy-mode-vi 'v' send -X begin-selection # start selecting text with "v"
bind-key -T copy-mode-vi 'y' send -X copy-selection # copy text with "y"

unbind -T copy-mode-vi MouseDragEnd1Pane # don't exit copy mode after dragging with mouse

# tpm plugin (its a plugin manager)
set -g @plugin 'tmux-plugins/tpm'

# list of my tmux plugins
set -g @plugin 'christoomey/vim-tmux-navigator' # for navigating panes and vim/nvim with Ctrl-hjkl
set -g @plugin 'dracula/tmux' # design
set -g @dracula-plugins 'battery time git network' # dracula status bar config
set -g @dracula-show-timezone false # dracula status bar config
set -g @dracula-military-timezone true # dracula status bar config

# its needed for using the plugins
run '~/.tmux/plugins/tpm/tpm'

```
# Development Environment
In the past years, I tried a lot of editor and IDE-s, but none of them had the ability to keep me hooked in.
VSCode was the one that I prefered over 2 years, and I thought that it will stand forever.  
Then I tried neovim.  
At first I was so confused and I was lazy to learn it, but I saw the potential in it. After half of a year later
I was pissed off for VSCode and I felt the power to jump in the vim/neovim rabbit hole so I made the jump. One of the best
decisions that I've ever made.
## neovim
Neovim is the sibling of the better known vim. Vim is better for the fast code changes from terminal, because its more lightweight and
no need to setup, so if you doing something on a server over ssh, you can just write code efficiently in vim.
Neovim is a little different, its purpose is to give people an alternative to the modern IDE-s with a lot of plugins.
The first step is to download it:
```terminal
brew install neovim
```
After that you can setup your neovim on your own, but there are some other options too:
- First, you can go through on an article and do the same neovim setup
- Second, you can set up a pre made neovim environment like LazyNvim or NvChad.
I prefer the second, because I don't really want to customize everything by myself, and these tools made by a huge community
is more reliable in my oppinion.  
My take is [AstroNvim](https://astronvim.com/).  
## AstroNvim

### Advantages
Two big advantage of Astro is
- Configuration
- Community plugin configs

Configuration is a big advantage for me, because it has a really cool own system for managing plugins and configurations.
The basic idea is to store your personal configurations in one place.  
For the first step when you downloads AstroNvim, to make a fork from [this repo](https://github.com/AstroNvim/user_example)  
For example, my fork can be found [here](https://github.com/bormilan/astronvim_config)
So for the configuration, you can store everything in a repo that you just need to clone if you starting setup in a new computer.

The second advantage is, for astrovim the community made several configuration for plugins, that you just need to add your community
plugin list and you can go.  
This is so powerful for a guy like me, who prefer simplicity over configurability in most of the times when it comes to plugins. For example last
time, when I started using obsidian, I was just added this line to my community.lua:


<!-- <center><img src=""></center> -->
<center><img src="http://www.bormilan.com/community.lua.png" width="100%" height="100%"></center>

And boom you can use it in you neovim. I really like this, if you wan you van set up your configuration as custom as you want, but if
you just don't want to, its enough to use the community plugin config.
### Steps for setting up
Note that if you have already some neovim setup, and you don't want to overwrite it, you need to make a backup of it.
```teminal
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
```
First, if you have neovim, you just need to clone AstroNvim:
```teminal
git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
```
After that, when you open neovim you will see a panel about downloading the required packages and plugins.
```terminal
nvim
```
Thats it basically, you have a fully working neovim. But wait. Is that so?  
To be fair, you have some tasks to reach the ultimate goal.

If you have a forked repo from `the user_example` as I told earlier, you need to clone that repo inside your astrovim directory.
```terminal
cd ~/.config/nvim/lua
```
Then clone your repo.
```terminal
git clone {your_repo}
```
After the you just need to rename the created folder to `user` if your repo name is different.
```terminal
mv {your_repo_name} user
```
### My own astrovim config repo
For configuration, there are several guides and documentations you can follow.
- [You can find the official AstroNvim documentation on the repo](https://github.com/AstroNvim/AstroNvim)
- [Heres a really good yt video about the whole process](https://www.youtube.com/watch?v=GEHPiZ10gOk)

Now I will show my personal configuration.  
The first thing I set up is a good color scheme. My favorite is **gruvbox** so I downloaded the community configuration for it.
```lua
  { import = "astrocommunity.colorscheme.gruvbox-nvim" },
```
And then I set it in the `init.lua`.
```lua
-- Set colorscheme to use
colorscheme = "gruvbox",
```
For language servers, like lsp, formatter or dap, you can use the `mason.lua` in the `plugins` folder.
My LSP setup:
```lua
  {
    "williamboman/mason-lspconfig.nvim",
    -- overrides `require("mason-lspconfig").setup(...)`
    opts = function(_, opts)
      -- add more things to the ensure_installed table protecting against community packs modifying it
      opts.ensure_installed = require("astronvim.utils").list_insert_unique(opts.ensure_installed, {
        "lua_ls",
        "pyright",
        -- "erlangls"
      })
    end,
  },

```
Formatting:
```lua
  {
    "jay-babu/mason-null-ls.nvim",
    -- overrides `require("mason-null-ls").setup(...)`
    opts = function(_, opts)
      -- add more things to the ensure_installed table protecting against community packs modifying it
      opts.ensure_installed = require("astronvim.utils").list_insert_unique(opts.ensure_installed, {
        -- "prettier",
        "stylua",
      })
    end,
  },

```
As you can see, if you dont want to use one, you just need to comment it out.  
This simple.

### ripgrep
One last thing I want to mention. If you want to use the `folke/todo-comments.nvim` plugin, or some cases with telescope
you propably will face an error.  
In my scenario, installing ripgrep solved the error.
```terminal
brew install ripgrep
```

Thank you for reading, if you found it interesting or have a question, just drop me an email on message me on LinkedIn.

## References
[terminal config article](https://www.josean.com/posts/terminal-setup) - Josean Martinez - October 3, 2022  
[tmux config article](https://www.josean.com/posts/tmux-setup) - Josean Martinez - October 27, 2022  
[astrocim config video](https://www.youtube.com/watch?v=GEHPiZ10gOk) - Cretezy - March 24, 2023
