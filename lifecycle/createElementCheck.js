const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

function createElement(type, config, children) {
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {
    // if (hasValidRef(config)) {
    //   ref = config.ref;

    //   if (__DEV__) {
    //     warnIfStringRefCannotBeAutoConverted(config);
    //   }
    // }
    // if (hasValidKey(config)) {
    //   if (__DEV__) {
    //     checkKeyStringCoercion(config.key);
    //   }
    //   key = "" + config.key;
    // }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;

    // Remaining properties are added to a new props object
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    // if (__DEV__) {
    //   if (Object.freeze) {
    //     Object.freeze(childArray);
    //   }
    // }
    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  //   if (__DEV__) {
  //     if (key || ref) {
  //       const displayName =
  //         typeof type === "function"
  //           ? type.displayName || type.name || "Unknown"
  //           : type;
  //       if (key) {
  //         defineKeyPropWarningGetter(props, displayName);
  //       }
  //       if (ref) {
  //         defineRefPropWarningGetter(props, displayName);
  //       }
  //     }
  //   }
  if (true) {
    if (key || ref) {
      const displayName =
        typeof type === "function"
          ? type.displayName || type.name || "Unknown"
          : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  props.onClick();
  return type, key, ref, self, source, undefined, props;
}

function handleNumber() {
  console.log(this);
}

createElement("button", { onClick: handleNumber }, "asdf");
