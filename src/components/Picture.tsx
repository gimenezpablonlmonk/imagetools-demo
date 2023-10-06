export const Picture = ({meta}) => {
    console.log(meta)
    return (
        <div style={{maxWidth: '33vw'}}>
            <picture>
                {Object.entries(meta.sources).map(([type, srcMeta]) => (
                    <source
                    type={`image/${type}`}
                    sizes="33vw"
                    srcSet={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')}
                    />
                ))}
                <img src={meta.img.src} alt=""/>
            </picture>
        </div>
    )
}