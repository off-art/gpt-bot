import { unlink} from 'fs/promises'

export const removeFile = async (path) => {
    try {
        await unlink(path)
    } catch (e) {
        console.log('ERROR While removing File', e.message)
    }
}
