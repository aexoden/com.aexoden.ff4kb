# ff4kb.aexoden.com

This is the source code to the ff4kb.aexoden.com web site. As long as I am
maintaining the site myself, there is only limited utility to this code.
Nonetheless, this provides a backup in case I stop maintaining the web site for any
reason.

## Usage

This site is currently deployed using a [dokku](https://dokku.com/) instance.
However, the deployment is done via a standard Dockerfile. There are certain
environment variables that should be set, either automatically by Dokku (or some
other PaaS solution), or manually by the user:

* DJANGO_ALLOWED_HOSTS: A comma separated list of domain names the app should
  reply to. The default is `ff4kb.aexoden.com` but this is almost certainly not
  what you want.
* DJANGO_SECRET_KEY: Should be set to a random, unpredictable value. Generators
  are available on the web.
* ENVIRONMENT: Set to `Production` for production.
* PORT: The port to bind to, typically set automatically by Dokku.

## Usage Notes

One feature of this web site (using custom values for a route's variables)
requires a copy of [rosa](https://github.com/aexoden/rosa) to be placed in the
`rosa` directory. The `Dockerfile` will take care of building and installing
this, but if you are doing some other form of installation, you will need to
handle the rosa installation yourself. Note that this feature currently has no
obvious public-facing interface, though if someone knew the correct parameters
to pass to the URL, they could access it.

## Development Notes

This site's codebase was originally developed in late 2017. While it has evolved
over time, parts of the design still reflect early choices that I now consider
suboptimal or outdated. Though many improvements have been made, some aspects
remain a product of their time. Specifically, the code still relies on too many
nested dictionaries and contains many scattered magic numbers. A number of lints
I would normally fix properly (mostly to do with magic numbers or complexity)
are instead ignored. In addition, there is minimal testing architecture, leaving
breakage all too easy to cause.

I do not currently have much interest in doing deep architectural improvements
myself (and would be more tempted to rewrite everything in Rust), but well done
pull requests are welcome.
