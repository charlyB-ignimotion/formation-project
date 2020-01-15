const modulesList = [
    'omdb'
];

async function importModules({store}) {
    // import vuex store of the module
    for (let moduleName of modulesList){
        const vuexModule = await import(`@/modules/${moduleName}/store`);
        store.registerModule(moduleName, vuexModule.default)
    }
}

export default importModules
