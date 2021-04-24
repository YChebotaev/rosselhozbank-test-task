import { DateEdit, DateView } from '../components/elements/Date'
import { TextEdit, TextView } from '../components/elements/Text'
import { TextareaEdit, TextareaView } from '../components/elements/Textarea'

import { ComponentType } from 'react'

export type ElementType = 'text' | 'textarea' | 'date'

interface ElementComponentDescriptor {
  component: ComponentType
}

export interface Element<V> {
  id: number
  type: ElementType
  value: V
  label: string
}

interface ElementDescriptor {
  type: ElementType
  displayName: string
  edit: ElementComponentDescriptor
  view: ElementComponentDescriptor
  create: (index: number) => Element<any>
}

export const ELEMENTS: Record<ElementType, ElementDescriptor> = {
  'text': {
    type: 'text',
    displayName: 'Текст',
    edit: {
      component: TextEdit
    },
    view: {
      component: TextView
    },
    create(index): Element<string> {
      return {
        id: index,
        type: 'text',
        value: '',
        label: 'Text Field'
      }
    }
  },
  'textarea': {
    type: 'textarea',
    displayName: 'Многострочный текст',
    edit: {
      component: TextareaEdit
    },
    view: {
      component: TextareaView
    },
    create(index): Element<string> {
      return {
        id: index,
        type: 'textarea',
        value: '',
        label: 'Text Area'
      }
    }
  },
  'date': {
    type: 'date',
    displayName: 'Дата',
    edit: {
      component: DateEdit
    },
    view: {
      component: DateView
    },
    create(index): Element<Date> {
      return {
        id: index,
        type: 'date',
        value: new Date(),
        label: 'Date/time'
      }
    }
  }
}
