// This webpackChunkName will NOT be used by rspack
import(/* webpackChunkName: "component.Render" */ './render').then(
  async (exports) => {
    // This webpackChunkName will be used by rspack
    const { dynamicallyImportedFunction } = await import(
      /* webpackChunkName: "dynamicFunction" */ './dynamic'
    );
    console.log(dynamicallyImportedFunction());

    exports.render();
  }
);
