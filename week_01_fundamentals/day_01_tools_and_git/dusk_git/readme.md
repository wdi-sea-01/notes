##Getting Started

**Resources**

[Git](http://git-scm.com/book/en)

**Objectives**

- Define version control systems
- Identify main git commands to manage files
- Distinguish bewteen local and remote repositories
- Create git repository on github and collaborate with others
- Show how to setup and use git branches
- Apply git commands and github UI to create and manage repositories from scratch

**Motivation**

Have you ever worked on a paper or any document collaboratively with others? What have you noticed? What was the workflow like? What did work, what didn't?

Now enter software programming. Programming is a highly team based activity. That's why I love programming: A project is always more fun when you’ve got friends working with you. Sometimes very large teams work on a single project. We as developers need tools that support collaborative working. Enter **Version Control Systems**.

**What is version control, and why should you care?**

So how do you collaborate in software projects?

In the most fundamental way, version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

More specifically, a VCS allows you to:

- revert files back to a previous state
- revert the entire project back to a previous state
- review changes made over time
- collaborate on a set of files with others
- see who last modified something that might be causing a problem

Plus it functions as a backup system, a safe place for all your work. Using a VCS means that if you screw things up or lose files, you can generally recover easily. In addition, you get all this for very little overhead.

There are many VCS. Git and GitHub have become the VCS of choice for most software teams. Do you know other VCS?

##Definitions

Git and github provide a framework, tools and workflows for collaboration.

**git**

  git is a version control system

**github**

Is a social network build around git. I has has completely changed the way we, as programmers, work. GitHub is now the largest online storage space of collaborative works.

  git and github together is a distributed version control system

[DVCS diagram](http://git-scm.com/figures/18333fig0103-tn.png)

We're going to talk about git first. git is local (Computer A), that's your laptop. Nearly every operation is local. Most operations in Git only need local files and resources to operate - generally no information is needed from another computer on your network.

Github is the "Server Computer", we get to it in the second part of this lecture.

##Git

A word about folder management.

Recommendation: Create "Code" folder in your home diretcory. This is the place for all source code that you create at GA (projects, labs, homework). Let's talk about folder structure.

Options:

* By time
* By topic
* A combination of both

Discuss approach. What works for you? I recommend that you decide on a structure in the first week and stick to it. We found that organizing folders by time works for most.

**1) Let's get started and create a project with a single file**

Create file that contains your name and contact info. Example:

  ~/Code/week0/project_git/my_contact.txt

**2) Create a git repository **

First, *cd* into project_git folder.

The first step is creating a version database, i.e. a repository

    git init

You do this only once per project. Let's check the status of our newly created repo:

  git status

**3) Let's put it under git management**

You can add files individually or the entire directory, including sub folders.

    git add my_contact.txt

    git add . (adds everything in the current folder)

The file is now **tracked** by git. Run *git status* to see for yourself.

**4) Add file to git repository **

Let's say you're happy with your work and want to save a version. This is called **committing**:

    git commit -m 'my first commit' my_contact.txt

    git commit -m 'my first commit . (commits everything in the current folder)

The file now has a unique version in git and can be recovered if lost. Make sure everything is *clean*:

  git status

**5) Let's make changes**

Go add a line to the contatcs file, or make any change, and save. Then run:

    git status my_contact.txt

How do we find out what changed?

    git diff my_contact.txt

We're happy with the changes, so let's commit:

  git commit -m 'added phone number' .

**6) Discard changes**

What if you make an unwanted change and want to unmodify a file?

  git checkout my_contact.txt

You can also go back to a specific version in history. First, find version number:

  git log

and revert

  git revert <version number>

**7) Recover work **

Now lets blow everything away!

  rm *.*

And get it back

  git checkout .

**8) Deleting files**

Let's delete a file for good

    git rm <file>
    git commit -a -m'deleted file'

**To summarize **

- Do some programming.
- git add files that become part of your program (track)
- git commit files that are *done for now*
- Do some more programming.
- git status <file> or . to see which files changed.
- If uncertain, use git diff to see exactly what changed
- git commit files I'm happy with with (commit)
- git checkout to dicsard local changes (unmodifiy)
- Do some more programming.

This is the most simple workflow, things get a bit more complex when you start sharing code and manage larger code bases. But this is a good start.

**Note (important): Git repositories may not contain other git repositories.**

##Github

Now, everything is still local, on your computer.

So far we have looked only at local repositories, remember most of what you do in git is local. However, in order to share your code and collaborate, you need to create a remote repository.

Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several of them, each of which generally is either read-only or read/write for you. Collaborating with others involves managing these remote repositories and pushing and pulling data to and from them when you need to share work. Plus: remote repositories functions as backups, they cannot get lost, unlike your laptop. It's like saving 'in the cloud'.

Enter Github - a place to host and share remote repositories. Go to github.com and explore.

**Check your git configuration**

 Make sure git email email matches github account email.

  git config -l | grep user

**1) Put local repo up on github**

Create github repo, name it 'project_git' (it could have any name, but why not be consistent?).

**2) Link up github repo with local repo**

Read hints that github provides after creating repo. Execute this command in the local project directory.

    git remote add origin git@github.com:<your github handle>/project_git.git

Reads: *Link the remote repository project_git to my local repo/workspace. The remote repo shall be known as 'origin'*

**3) Push changes to github**

Note: you may have to authenticate for the first time. You can setup password caching [see here](https://help.github.com/articles/set-up-git) (that was part of install fest)

    git push origin master

Reads: *Upload the code in my local repository, which is known as master, to github (origin)*

Check if changes made it to github.

**4) Now change a file and push changes to github**

    make change
  git commit -m 'my comment' .
  git push origin master

Verify that new version shows up on github.

**5) Cloning: Download an entire project from github**

Delete your project!

  rm -rf project_git

... and get it back from github:

  git clone ... (grab clone url from git repo page)


###Activity (15 min)

The real power of git comes out when you are collaborating with others on a project.

If you own a repo, you can ask others to collaborate with you as contributors.

Get into pairs, one is A the other is B

A makes B collaborator on their repository

  Github -> Repos page -> Settings > Collaborators

B clones A's repository to their local machine. Make sure to clone into a new folder as to not overwrite your own 'project_git' repo.

    git clone <repo clone url>

B makes a change

    git commit -m'a comment' <file>
    git status <file>
    git push origin master

A picks up changes

    git pull origin master


##Branching

The master branch is where we've currently been working. Normally this branch is reserved for production code, meaning that it is ready to be put on production servers for the whole world to use. Instead, development is normally done on other branches. Currently there are master branches both locally and remotely.

Use case: Let's say you need to work on a larger feature that takes about a week, you want to create a separate code branch and start work there. This is called 'topic branch'. The idea is that you want to keep a clean, production ready master branch at all time. Why? Let's say a severe bug was discovered on the live web site, pointy haired boss asks you to fix it. You Create another branch from the clean master branch, fix the bug and merge the fix back to master.

List of branches:

    git branch

Just like in a tree, you can create a branch off an existing branch.

  git branch development

Now that a new branch has been created, let's move to it.

    git checkout development
    git checkout -b development (create and switch at the same time)

Notice that the branch has changed. What was in master? Your files should also show up in the development branch because it was branched from the master. Check it using ls.

Ok, let's start working in this branch. Please go ahead an make a change, modify a file.

Commit the change and check git status.

If clean, switch back to 'master'

    git checkout master

Now that we are back in master, we have to merge the changes form the dev branch back to master. Remember, master is our production branch, we always push to github from master.

check which branch you are in:

    git branch

now merge development branch:

    git merge development

This should succeed (happy path). Now that master is clean, push it to Github.

Note: for lab assignments and mini projects, using branches is overkill. It's fine to work in the master branch. However, when you get to larger projects, branches become your friend.

####Activity 2 (15 min)

[Lab 2](https://gist.github.com/neurosaurus/2b5013313c2fa28eab89)

###Pretty git prompt

A shell prompt that shows git branch status.

1) Copy code snippet below in a new file ~/bin/branch.rb

```
# encoding: utf-8
branches = STDIN.read.chomp
if !branches.empty?
  branch = branches.split("\n").map(&:strip)[0].split(' ').map(&:strip)[-1]
  second_line = branches.split("\n").map(&:strip)[1]
  is_clean = second_line == "nothing to commit, working directory clean"
  if !branches.empty?
    if is_clean
      puts " ✓ #{branch}"
    else
      puts "\e[0;31m ✗ #{branch}"
    end
  end
end
```

Save file


2) Add this to top of .bashrc

```
txtblk='\[\e[0;30m\]' # Black
txtred='\[\e[0;31m\]' # Red
txtgrn='\[\e[0;32m\]' # Green
txtylw='\[\e[0;33m\]' # Yellow
txtblu='\[\e[0;34m\]' # Blue
txtpur='\[\e[0;35m\]' # Purple
txtcyn='\[\e[0;36m\]' # Cyan
txtwht='\[\e[0;37m\]' # White
txtrst='\[\e[0m\]'    # Text Reset

function branch
{
  git status 2> /dev/null | ruby ~/bin/branch.rb
}
PS1='\[\033[00;34m\][\[\033[01;34m\]\w \[\033[00;34m\]]\[\033[01;32m\]$(branch) ∴ \[\033[00m\]'
```

**Restart Terminal**



