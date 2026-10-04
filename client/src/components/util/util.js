const cleanLyricHtml = (lyric) => {
    let clean_lyric = lyric.replaceAll('<p>', '')
        .replaceAll('</p>', '')
        .replaceAll('<i>', '')
        .replaceAll('</i>', '')
        .replaceAll('</a>', '')
        .replaceAll('&amp;', '');

    return clean_lyric
}

export default cleanLyricHtml;