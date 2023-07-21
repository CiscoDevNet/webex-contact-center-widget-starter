
# Contributing

We'd love for you to contribute to our source code and to make Webex Contact Center Widget Starter even better than it is today! 

## What is this repo? 

This repo can be forked as a base for your Webex Contact Center widget or simply used as a reference material . Feel free to treat this as a boilerplate project.

## To integrate JS SDK 

To integrate contact center desktop sdk in the starter-kit-widget . Follow the below steps. 

  - `npm install @wxcc-desktop/sdk --save` <br>
   or <br>
   `yarn add @wxcc-desktop/sdk`

  - Once you have installed the package in your project, include it in the appropriate component file following the ES6 import pattern:<br>
    `import {Desktop} from "@wxcc-desktop/sdk"`

## Requirements

To contribute to `@webex-contact-center-widget-starter`, you need to have [>=Node 8.10.0](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed globally on your machine.


## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the Angular change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples:

```
docs(changelog): update change log to beta.5
```
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **chore**: Other changes that don't modify `src` or `test` files

### Scope
The scope could be anything specifying place of the commit change.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

**Referencing issues** Closed bugs should be listed on a separate line in the footer prefixed with "Closes" keyword like this:

`Closes #234`

or in case of multiple issues:

`Closes #123, Closes #245, Closes #992`

## Submitting a Code Review

*   Before pushing to a PR, always use `git pull --rebase`
*   After git pulls, run `yarn bootstrap:clean` at the repo root (`webex-contact-center-widget-starter`) to make sure to pull new dependencies.

Before you submit your pull request consider the following guidelines:

* Search [GitHub](https://github.com/CiscoDevNet/webex-contact-center-widget-starter/pulls) for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit-message-format). Adherence to the [commit message conventions](#commit-message-format)
  is required because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Build your changes locally to ensure all the tests pass:

    ```shell
    yarn build
    ```

* Push your branch to GitHub:

    ```shell
    git push <username> my-fix-branch
    ```

* In GitHub, send a pull request to `webex-contact-center-widget-starter:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the `@webex-contact-center-widget-starter` test suite to ensure tests are still passing.
  * Commit your changes to your branch (e.g. `my-fix-branch`).
  * Push the changes to your GitHub repository (this will update your Pull Request).

* If the PR gets too outdated we may ask you to rebase and force push to update the PR:

    ```shell
    git rebase master -i
    git push <username> my-fix-branch -f
    ```

*WARNING. Squashing or reverting commits and forced push thereafter may remove GitHub comments
on code that were previously made by you and others in your commits.*

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push <username> --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## Reference links for more details <br>
   - [Desktop JS SDK Official](https://developer.webex-cx.com/documentation/guides/desktop)
   - [Desktop JS API samples](https://github.com/CiscoDevNet/webex-contact-center-api-samples)
   - [Product Overview and Documentation](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html)
   - [Other useful resources](https://ciscodevnet.github.io/webex-contact-center-widget-starter/?path=/story/introduction--page)
## License

By contributing your code to the `@webex-contact-center-widget-starter` GitHub repository, you agree to license your contribution under the MIT license.