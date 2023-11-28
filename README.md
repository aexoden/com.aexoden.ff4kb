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

My setup currently additionally sets SECRET_KEY to the same value as
DJANGO_SECRET_KEY. I currently do not know which of these is required or if both
are.

## Known Issues

There are a couple of issues with the current code that make deploying this more
difficult than it should be:

1. The step route generation tool, rosa, is included as a binary directly in the
   repository. Ideally, it would be built from source on the target machine. The
   current binary is relatively generic for a current cloud VM, but it could be
   problematic in the future if it happens to use an instruction that is later
   removed (or if ARM servers become popular, etc.). Thus, depending on the
   current situation, it may be necessary to build a new binary manually. This
   tool is currently only used for custom routes, so most of the site's
   functionality would remain intact nonetheless.

2. Basic statistics about each route are cached to avoid reading all files on
   disk every time the data is needed. This cache is generated per route on
   first use. However, generating the cache is a relatively slow operation (potentially
   several seconds), and will make the site appear to stall. If the seed finder
   tool is accessed, the site will likely time out and give an error. The second
   or third attempt should succeed, however. A better solution would be to
   generate the cache during the deployment process.
