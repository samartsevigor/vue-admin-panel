import { defineComponent } from 'vue'
import { news } from '@/plugins/api'
import { loadNews } from '@/plugins/api'
import { Table } from 'ant-design-vue'

export default defineComponent({
  setup() {
    loadNews()
    const columns = [
      {
        dataIndex: 'id',
        key: 'id',
        slots: { title: 'customTitle', customRender: 'name' }
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: 'content',
        dataIndex: 'content',
        key: 'content'
      },
      {
        title: 'created_at',
        key: 'created_at',
        dataIndex: 'created_at'
      },
      {
        title: 'updated_at',
        key: 'updated_at',
        slots: { customRender: 'updated_at' }
      }
    ]

    return () => (
      <>
        <h1>Список новостей</h1>

        <Table
          columns={columns}
          dataSource={news.value || []}
          scroll={{ x: 800 }}
        />
      </>
    )
  }
})
