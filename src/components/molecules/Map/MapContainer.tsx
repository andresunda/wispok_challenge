import { Draggable, Map, Point } from 'pigeon-maps'

import PIN_MARKER from '/marker.svg'

interface Props {
  anchor: Point | undefined
  onDragEnd?: ((anchor: Point) => void) | undefined
  defaultCenter: [number, number]
  height?: string
}

export const MapContainer = ({ anchor, onDragEnd, defaultCenter, height }: Props) => {
  return (
    <div
      style={{
        borderRadius: '25px',
        overflow: 'hidden',
        height: height || '240px',
        width: '100%',
        border: '1px solid #fafafa',
      }}
    >
      <Map defaultCenter={defaultCenter} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={onDragEnd}>
          <img src={PIN_MARKER} width={50} height={85} alt="Map pin marker" loading="lazy" />
        </Draggable>
      </Map>
    </div>
  )
}
