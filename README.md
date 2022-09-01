This is a custom fork of [goober](https://github.com/cristianbote/goober). 

- It removes `setup` and `styled` exports, and leaves their implementation to a wrapper library.
- Custom hash generation function is removed in favor of `@emotion/hash`, for more beautiful classnames. Bundlesize is not a major concern in this fork.
- Prefixing is done by default, so `style-vendorizer` is a default dependency.
- Adding `px` unit next to numbers in **some** css attributes is a desired feature. So it's done by default, and `@emotion/unitless` is a default dependency.

Thanks a lot to cristianbote and other contributors of goober.