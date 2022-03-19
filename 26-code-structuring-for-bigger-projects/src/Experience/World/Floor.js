import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Floor {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }

    setTextures() {

    }

    setMaterial() {

    }

    setMesh() {

    }
}