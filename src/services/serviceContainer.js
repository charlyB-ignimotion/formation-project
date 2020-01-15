const RepositoryInterface = {
    find() {},
    list() {},
};

function bind(repositoryName, Interface) {
    return {
        ...Object.keys(Interface).reduce((prev, method) => {
            const resolveableMethod = async (...args) => {
                const repository = await import(`./repositories/${repositoryName}`);
                return repository.default[method](...args);
            };
            return { ...prev, [method]: resolveableMethod };
        }, {}),
    };
}

export default {
    movieRepository: bind('movie', RepositoryInterface),
    serieRepository: bind('serie', RepositoryInterface),
    episodeRepository: bind('episode', RepositoryInterface),
};
