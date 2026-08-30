import React from 'react'

type IconProps = {
  className?: string
  ariaHidden?: boolean
}

export const GithubIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

export const LinkedinIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const EnvelopeIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

export const WhatsappIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export const Html5Icon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.248H8.531z" />
  </svg>
)

export const Css3AltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H5.744l.246 2.716H15.12l-.383 4.12-3.146.86-3.147-.86-.224-2.419H6.21l.445 4.784 5.346 1.466h.005l5.35-1.466.73-8.248z" />
  </svg>
)

export const JsIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
)

export const CodeIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
)

export const ReactIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.154-.944-.32-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.393.465.773.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
)

export const BoltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

export const VuejsIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z" />
  </svg>
)

export const LayerGroupIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 12.48l-7.5-4.72L12 3.04l7.5 4.72zM1.5 12l10.5 6.61L22.5 12l-2.6-1.63-7.4 4.66-7.4-4.66zm0 5l10.5 6.61L22.5 17l-2.6-1.63-7.4 4.66-7.4-4.66z" />
  </svg>
)

export const WindIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12.5 2c-1.75 0-3.05 2.25-3.05 4s1.3 4 3.05 4h1.5c1.1 0 2 .9 2 2s-.9 2-2 2H3v-2h11c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5c-2.76 0-5-2.24-5-5s2.24-5 5-5h1c1.93 0 3.5-1.57 3.5-3.5S14.43 2 12.5 2zM12.5 6h-1C10.67 6 9.5 7.12 9.5 8.5S10.67 11 11.5 11h1c.83 0 1.5-1.12 1.5-2.5S13.33 6 12.5 6zM3 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3.5a.5.5 0 110-1 .5.5 0 010 1z" />
  </svg>
)

export const SassIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.32 13.922c-.404 2.035-2.145 3.478-3.81 4.096-.664.24-1.365.448-1.92.768-.34.186-.555.58-.365.935.145.275.525.405.82.283.55-.23 1.12-.388 1.616-.58.877-.33 1.653-.76 2.33-1.398.99-.93 1.55-2.172 1.822-3.528.12-.585.14-1.19-.067-1.768-.485-1.35-1.903-1.945-3.18-1.54-.39.12-.735.35-.95.72-.67-.265-1.33-.52-1.985-.796-.58-.24-1.36-.488-1.682-1.195-.18-.4.01-.91.386-1.17.376-.26.87-.07 1.12.296.15.22.22.48.33.73.285-1.46.91-2.76 2.31-3.36 1.187-.51 2.658-.29 3.58.63.485.475.73 1.12.772 1.774.06.8-.064 1.662-.604 2.278-.37.426-.865.726-1.412.985-.224.106-.46.192-.61.37-.156.182-.098.394.034.56.13.163.355.228.555.15.62-.25 1.255-.51 1.785-1.01.8-.75 1.19-1.81 1.195-2.914.006-1.88-1.164-3.7-3.07-4.315-1.703-.55-3.676-.134-4.93 1.21-.675.726-1.026 1.684-1.11 2.67-.058.7.042 1.478.378 2.096.33.61.874 1.086 1.49 1.42.754.41 1.596.725 2.367 1.09.156.073.313.15.46.232.24.13.46.28.57.54.11.26.056.55-.114.76-.17.21-.43.3-.69.25-.65-.127-1.3-.3-1.92-.514-1.19-.42-2.378-.985-3.244-1.922-1.02-1.1-1.522-2.56-1.47-4.05.05-1.56.696-3.16 1.97-4.25 1.15-.98 2.67-1.49 4.2-1.43 1.52.06 2.982.64 4.12 1.73 1.07 1.03 1.695 2.46 1.76 4.026.07 1.57-.44 3.202-1.48 4.408z" />
  </svg>
)

export const PaintBrushIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zm-9.9 10.82L8.55 13.2 5 16.75l-1.52-.49c-.57-.19-1.15.12-1.35.69-.19.56.12 1.15.69 1.34L6 20l3.56-3.55-2.75-2.75zM18.71 13.91c-.35.14-.72.21-1.09.21-1.37 0-2.5-1.12-2.5-2.5 0-1.04.66-1.95 1.59-2.33l1.78-1.78c.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83l-2.52 2.57zM7 19.5c-.83 0-1.5-.67-1.5-1.5 0-.38.14-.74.38-1.01L9 14.83 11.17 17l-2.15 2.15c-.27.24-.63.38-1.02.38z" />
  </svg>
)

export const BootstrapIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.228 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.054c1.05-.162 1.753-.99 1.753-2.005 0-1.231-.945-2.112-2.643-2.112H8.712v6.727h4.185c2.128 0 3.176-.953 3.176-2.068z" />
  </svg>
)

export const FigmaIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 00-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098zM8.148 15.019H8.172m0 0h-.024" />
  </svg>
)

export const MobileAltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-5-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
)

export const PenNibIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
)

export const SearchIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
)

export const TachometerAltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 2C6.486 2 2 6.487 2 12s4.486 10 10 10 10-4.487 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

export const UserCheckIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm0 2c-3.87 0-7 3.13-7 7v1h2v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1h2v-1c0-3.87-3.13-7-7-7zm9.54-5.46l-4.95 4.94-2.12-2.12-1.41 1.41 3.54 3.54 6.36-6.36-1.42-1.41z" />
  </svg>
)

export const VialIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M18 2h-5V0H7v2H2v2c0 3.3 2.37 6.02 5.46 6.72L1 22h22l-6.46-11.28A7 7 0 0022 4V2h-4zm-6 18H4l6-10.47V20zm2-12.46L16 20h-2V7.54zM10 4V2h4v2h-4z" />
  </svg>
)

export const CloudUploadAltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
  </svg>
)

export const DatabaseIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
  </svg>
)

export const WordpressIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12.158 12.786l-2.912 7.612c.93.28 1.905.449 2.916.449 1.14 0 2.244-.211 3.267-.602l-3.27-7.459zm-4.21-2.801H6.84c-.321 0-.581-.259-.581-.58 0-.321.26-.581.581-.581h1.905c.321 0 .581.26.581.581 0 .321-.26.58-.581.58zm6.685 0h-1.107c-.321 0-.581-.259-.581-.58 0-.321.26-.581.581-.581h1.107c.321 0 .581.26.581.581 0 .321-.26.58-.581.58zm-3.35 0h-1.395c-.321 0-.58-.259-.58-.58 0-.321.259-.581.58-.581h1.395c.321 0 .581.26.581.581 0 .321-.26.58-.581.58zm9.884-3.047c.27 1.385-.285 2.696-1.494 3.542l-.465.315c-.15.105-.24.27-.24.45v.03c0 .3.24.54.54.54h.045c.18 0 .345-.09.45-.24l.42-.63c.795-1.245.765-2.82-.195-4.005a4.374 4.374 0 00-2.97-1.38h-1.245c-1.695-1.875-4.05-3.045-6.69-3.045-2.535 0-4.815 1.05-6.51 2.73-.36.36-.705.735-1.035 1.125-2.43 1.605-3.285 4.83-1.995 7.455.195.39.615.645 1.05.645.285 0 .555-.12.75-.33.33-.345.435-.84.27-1.275-.645-1.725.165-3.69 1.905-4.545.495-.24 1.02-.36 1.56-.36.93 0 1.86.3 2.595.87 1.305 1.02 1.815 2.595 1.335 4.02l-.765 2.205c-.3 1.245.045 2.22.39 3.24.075.21.27.39.51.465.165.06.345.045.495-.045l1.665-1.005c.195-.12.33-.33.36-.555l.405-2.805.075-.09c.27-.345.855-.9 1.575-.9.6 0 1.11.345 1.365.6.285.285.42.66.405 1.035l-.06.33c-.03.165.06.33.21.39.105.045.21.045.315 0l1.02-.465c1.455-.66 2.835-2.04 3.735-3.87.57-1.155.855-2.415.81-3.72-.03-.9-.195-1.815-.495-2.685zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23.015C5.91 23.015 1 18.09 1 12 1 5.91 5.91 1 12 1s11 4.91 11 11-4.91 11.015-11 11.015z" />
  </svg>
)

export const NpmIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.083l11.578.005v11.47h-2.865v-8.61H11V20.16L5.13 20.158z" />
  </svg>
)

export const ExternalLinkAltIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M13.5 2H20v6.5l-2.15-2.15-6.7 6.7-1.4-1.4 6.7-6.7zm-3 1H10v1c0 2.76 2.24 5 5 5h1v-.5l2 2v.5c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7h.5l2 2v.5z" />
  </svg>
)

export const ChevronLeftIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

export const ChevronRightIcon = ({ className = '', ariaHidden = true }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden} className={className} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
)

const iconMap: Record<string, React.FC<IconProps>> = {
  'fab fa-github': GithubIcon,
  'fab fa-linkedin-in': LinkedinIcon,
  'fas fa-envelope': EnvelopeIcon,
  'fab fa-whatsapp': WhatsappIcon,
  'fab fa-html5': Html5Icon,
  'fab fa-css3-alt': Css3AltIcon,
  'fab fa-js': JsIcon,
  'fas fa-code': CodeIcon,
  'fab fa-react': ReactIcon,
  'fas fa-bolt': BoltIcon,
  'fab fa-vuejs': VuejsIcon,
  'fas fa-layer-group': LayerGroupIcon,
  'fas fa-wind': WindIcon,
  'fab fa-sass': SassIcon,
  'fas fa-paint-brush': PaintBrushIcon,
  'fab fa-bootstrap': BootstrapIcon,
  'fab fa-figma': FigmaIcon,
  'fas fa-mobile-alt': MobileAltIcon,
  'fas fa-pen-nib': PenNibIcon,
  'fas fa-search': SearchIcon,
  'fas fa-tachometer-alt': TachometerAltIcon,
  'fas fa-user-check': UserCheckIcon,
  'fas fa-vial': VialIcon,
  'fas fa-cloud-upload-alt': CloudUploadAltIcon,
  'fas fa-database': DatabaseIcon,
  'fab fa-wordpress': WordpressIcon,
  'fab fa-npm': NpmIcon,
  'fas fa-external-link-alt': ExternalLinkAltIcon,
  'fas fa-chevron-left': ChevronLeftIcon,
  'fas fa-chevron-right': ChevronRightIcon,
}

type FaIconProps = {
  icon: string
  className?: string
}

export default function FaIcon({ icon, className = '' }: FaIconProps) {
  const IconComponent = iconMap[icon]
  if (!IconComponent) return null
  return <IconComponent className={className} />
}
