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

```
git clone https://github.com/cockpit-project/starter-kit.git
cd starter-kit
make
```

## Installing

`make install` compiles and installs the package in `/usr/local/share/cockpit/`. The
convenience targets `srpm` and `rpm` build the source and binary rpms,
respectively. Both of these make use of the `dist` target, which is used
to generate the distribution tarball. In `production` mode, source files are
automatically minified and compressed. Set `NODE_ENV=production` if you want to
duplicate this behavior.

For development, you usually want to run your module straight out of the git
tree. To do that, run `make devel-install`, which links your checkout to the
location were cockpit-bridge looks for packages. If you prefer to do
this manually:

```
mkdir -p ~/.local/share/cockpit
ln -s `pwd`/dist ~/.local/share/cockpit/starter-kit
```

After changing the code and running `make` again, reload the Cockpit page in
your browser.

You can also use
[watch mode](https://esbuild.github.io/api/#watch) to
automatically update the bundle on every code change with

    $ ./build.js -w

or

    $ make watch

When developing against a virtual machine, watch mode can also automatically upload
the code changes by setting the `RSYNC` environment variable to
the remote hostname.

    $ RSYNC=c make watch

When developing against a remote host as a normal user, `RSYNC_DEVEL` can be
set to upload code changes to `~/.local/share/cockpit/` instead of
`/usr/local`.

    $ RSYNC_DEVEL=example.com make watch

To "uninstall" the locally installed version, run `make devel-uninstall`, or
remove manually the symlink:

    rm ~/.local/share/cockpit/starter-kit

## Running eslint

Cockpit Starter Kit uses [ESLint](https://eslint.org/) to automatically check
JavaScript code style in `.js` and `.jsx` files.

eslint is executed within every build.

For developer convenience, the ESLint can be started explicitly by:

    $ npm run eslint

Violations of some rules can be fixed automatically by:

    $ npm run eslint:fix

Rules configuration can be found in the `.eslintrc.json` file.

## Running stylelint

Cockpit uses [Stylelint](https://stylelint.io/) to automatically check CSS code
style in `.css` and `scss` files.

styleint is executed within every build.

For developer convenience, the Stylelint can be started explicitly by:

    $ npm run stylelint

Violations of some rules can be fixed automatically by:

    $ npm run stylelint:fix

Rules configuration can be found in the `.stylelintrc.json` file.

During fast iterative development, you can also choose to not run eslint/stylelint.
This speeds up the build and avoids build failures due to e. g. ill-formatted
css or other issues:

    $ ./build.js -es

## Automated release

Once your cloned project is ready for a release, you should consider automating
that. The intention is that the only manual step for releasing a project is to create
a signed tag for the version number, which includes a summary of the noteworthy
changes:

```
123

- this new feature
- fix bug #123
```

Pushing the release tag triggers the [release.yml](.github/workflows/release.yml.disabled)
[GitHub action](https://github.com/features/actions) workflow. This creates the
official release tarball and publishes as upstream release to GitHub. The
workflow is disabled by default -- to use it, edit the file as per the comment
at the top, and rename it to just `*.yml`.

The Fedora and COPR releases are done with [Packit](https://packit.dev/),
see the [packit.yaml](./packit.yaml) control file.

## Automated maintenance

It is important to keep your [NPM modules](./package.json) up to date, to keep
up with security updates and bug fixes. This is done with the
[npm-update bot script](https://github.com/cockpit-project/bots/blob/main/npm-update)
which is run weekly or upon [manual request](https://github.com/cockpit-project/starter-kit/actions) through the
[npm-update.yml](.github/workflows/npm-update.yml) [GitHub action](https://github.com/features/actions).

## Technologies

 - This project uses [ReactJS](http://react.dev) for UI/UX

 - The project is focusing on [Docker Engine](http://docker.io).

 - It will be [RedHat Linux server](http://https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) first.

