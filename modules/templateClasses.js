class Author {
    constructor(name = "", email = "", website = "") {
        this.name = name
        this.email = email
        this.website = website
    }
}

class Package {
    /**
     * 
     * @param {String} name Name of the Package (e.g.: git)
     * @param {SemVersion} version 
     * @param {Author} author 
     */
    constructor(name = "", version = null, author = null) {
        this.name = name
        this.version = version
    }
}


class SemVersion {
    static Status = {
        "pre_release": 0,
        "alpha": 1,
        "beta": 2,
        "release_candidate": 3,
        "release": 4
    }
    
    /**
     * Create new Semantic Version Object
     * @param {Number} major Major Version
     * @param {Number} minor Minor Version
     * @param {Number} patch Patch Version
     * @param  {...String|Number} end Stuff like Build or Pre-Release
     */
    constructor(major = 0, minor = 0, patch = 0){
        this.major = major
        this.minor = minor
        this.patch = patch
    }
}

SemVersion.prototype.toString = () => {
    return `${this.major}.${this.minor}.${this.patch}`
}

module.exports.SemVersion = SemVersion
module.exports.Author = Author
module.exports.Package = Package