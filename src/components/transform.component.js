import Vec3 from '../utils/vec3.utils.js';

class Transform {

    constructor(position = new Vec3(0, 0, 0), rotation = new Vec3(0, 0, 0)) {
        this.position = position
        this.rotation = rotation;
    }

}

export default Transform;