---

# This control sidebar index

index: 4

# This is the icon of the page

icon: article

# This is the title of the article

title: Sentry

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-25

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel
- Sentry.io

# The page’s sidebar heading rendering depth.

headerDepth: 1
---

What is Sentry.io, and what is reported to its servers?

Sentry.io is a service for developers to get an overview of errors in their applications. And exactly that is implemented in this adapter.

If the adapter crashes, or any other code error occurs, this error message, which also appears in the ioBroker Log
will be sent to Sentry. If you have allowed ioBroker GmbH to collect diagnostic data, then so you're
Installation ID (this is just a unique ID without any additional information about you, like your email / name).
Included. This allows Sentry to group errors and show how many users are affected by such an error.
Are affected. All this helps developers to provide bug-free adapters that practically never crash.

For more details and information on how to disable error reporting, please read the
[Sentry Plug-in Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry) <br>
:::tip info
Sentry reporting is used from js-controller 3.0 onwards.
:::