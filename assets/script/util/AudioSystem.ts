class AudioSystem {
    private static _instance: AudioSystem;

    private constructor () {
        
    }

    static getInstance () {
        if (!this._instance) {
            this._instance = new AudioSystem();
        }
        return this._instance;
    }
}

const audioSystem = AudioSystem.getInstance();

export default audioSystem;