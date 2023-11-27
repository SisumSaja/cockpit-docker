
# Commander Project

English | [日本語](README-ja_JP.md)

## Project Description
Create a custom pages to the [Cockpit](https://cockpit-project.org/) navigation, for managing Docker installation, image management, and container management.
## Development dependencies

On Debian/Ubuntu:

    $ sudo apt install gettext nodejs npm make

On Fedora:

    $ sudo dnf install gettext nodejs npm make


## Getting and building the source

These commands check out the source and build it into the `dist/` directory:
1. Clone Repository
```
git clone git@github.com:anclinc/commander.git
```

2. Change directory to local project directory
```
cd commander
```

3. Build project using Make command
```
make
```

## Installing

```
make install
``` 
compiles and installs the package in `/usr/local/share/cockpit/`. The
=======
# Cockpit Starter Kit

Scaffolding for a [Cockpit](https://cockpit-project.org/) module.


# Getting and building the source

These commands check out the source and build it into the `dist/` directory:

```
git clone git@github.com:SisumSaja/cockpit-docker.git
cd cockpit-docker
make
```

# Installing

`make install` compiles and installs the package in `/usr/local/share/cockpit/`. The
>>>>>>> d4482e3e056682fea6a254759928b33857ee3f18
convenience targets `srpm` and `rpm` build the source and binary rpms,
respectively. Both of these make use of the `dist` target, which is used
to generate the distribution tarball. In `production` mode, source files are
automatically minified and compressed. Set `NODE_ENV=production` if you want to
duplicate this behavior.

For development, you usually want to run your module straight out of the git
tree. To do that, run 
```
make devel-install
``` 
which links your checkout to the location were cockpit-bridge looks for packages. If you prefer to do
=======
tree. To do that, run `make devel-install`, which links your checkout to the
location were cockpit-bridge looks for packages. If you prefer to do
>>>>>>> d4482e3e056682fea6a254759928b33857ee3f18
this manually:

```
mkdir -p ~/.local/share/cockpit
<<<<<<< HEAD
ln -s `pwd`/dist ~/.local/share/cockpit/commander
=======
ln -s `pwd`/dist ~/.local/share/cockpit/cockpit-docker
>>>>>>> d4482e3e056682fea6a254759928b33857ee3f18
```

After changing the code and running `make` again, reload the Cockpit page in
your browser.

You can also use
[watch mode](https://esbuild.github.io/api/#watch) to
automatically update the bundle on every code change with

<<<<<<< HEAD
```    
./build.js -w
```
or
```
make watch
```
<br>
    $ ./build.js -w

or

    $ make watch

>>>>>>> d4482e3e056682fea6a254759928b33857ee3f18
When developing against a virtual machine, watch mode can also automatically upload
the code changes by setting the `RSYNC` environment variable to
the remote hostname.

```
RSYNC=c make watch
```

When developing against a remote host as a normal user, `RSYNC_DEVEL` can be
set to upload code changes to `~/.local/share/cockpit/` instead of
`/usr/local`.

```
RSYNC_DEVEL=example.com make watch
```

To "uninstall" the locally installed version, run `make devel-uninstall`, or
remove manually the symlink:

```
rm ~/.local/share/cockpit/commander
```
