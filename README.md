# ff4kb.aexoden.com

This is the source code to the ff4kb.aexoden.com web site. As long as I am maintaining the site myself, there is only
limited utility to this code. Nonetheless, this provides a backup in case I stop maintaining the web site for any
reason.

## Usage

This site is currently deployed using a [dokku](https://dokku.com/) instance. The exact steps to configure the instance
to accept the code are not currently listed here, but it should not be too difficult for an experienced developer to
figure out. (Eventually, I intend to do some serious work on either rewriting or refactoring this code, so spending a
lot of effort on the existing structure is not ideal.)

## Known Issues

There are a couple of issues with the current code that make deploying this more difficult than it should be:

1. The step route generation tool, rosa, is included as a binary directly in the repository. Ideally, it would be built
   from source on the target machine. The current binary is relatively generic for a current cloud VM, but it could be
   problematic in the future if it happens to use an instruction that is later removed (or if ARM servers become
   popular, etc.). Thus, depending on the current situation, it may be necessary to build a new binary manually. This
   tool is currently only used for custom routes, so most of the site's functionality would remain intact nonetheless.

2. Basic statistics about each route are cached to avoid reading all files on disk every time the data is needed. This
   cache is generated per route on first use. However, generating the cache is a relatively slow operation (potentially
   several seconds), and will make the site appear to stall. If the seed finder tool is accessed, the site will likely
   time out and give an error. The second or third attempt should succeed, however. A better solution would be to
   generate the cache during the deployment process.
