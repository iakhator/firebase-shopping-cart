<template>
    <div class="admin-table">
        <div class="table-header">
            <h3 class="table-title">{{ title }}</h3>
            <UIButton
                v-if="showAdd"
                label="Add"
                size="large"
                variant="primary"
                class="add-btn"
                @click="$emit('add')"
            />
        </div>
        <table>
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col.key">
                        {{ col.label }}
                    </th>
                    <th v-if="hasActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row.id">
                    <td v-for="col in columns" :key="col.key">
                        <span v-if="col.render">
                            <!-- Custom render function -->
                            {{ col.render(row[col.key], row) }}
                        </span>
                        <span v-else>
                            {{ row[col.key] }}
                        </span>
                    </td>
                    <td v-if="hasActions">
                        <div class="actions">
                            <UIButton
                                v-if="canEdit"
                                label="Edit"
                                size="small"
                                variant="secondary"
                                @click="$emit('edit', row)"
                            />
                            <UIButton
                                v-if="canDelete"
                                label="Delete"
                                size="small"
                                variant="danger"
                                @click="$emit('delete', row.id)"
                            />
                            <UIButton
                                v-if="canChangeRole"
                                label="Change Role"
                                size="small"
                                variant="primary"
                                @click="
                                    $emit(
                                        'changeRole',
                                        row.id,
                                        row.role === 'admin' ? 'user' : 'admin',
                                    )
                                "
                            />
                            <UIButton
                                v-if="canUpdateStatus"
                                :label="
                                    row.status === 'ordered'
                                        ? 'Process'
                                        : row.status === 'processing'
                                          ? 'Ship'
                                          : 'Complete'
                                "
                                size="small"
                                variant="primary"
                                @click="
                                    $emit(
                                        'updateStatus',
                                        row.id,
                                        nextStatus(row.status),
                                    )
                                "
                            />
                            <UIButton
                                v-if="canFulfill"
                                label="Fulfill"
                                size="small"
                                variant="primary"
                                @click="$emit('fulfill', row.id)"
                            />
                        </div>
                    </td>
                </tr>
                <tr v-if="!rows.length">
                    <td
                        :colspan="columns.length + (hasActions ? 1 : 0)"
                        class="empty-row"
                    >
                        No data available.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import UIButton from '~/components/ui/UIButton.vue'
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Table',
    },
    columns: {
        type: Array,
        required: true,
    },
    rows: {
        type: Array,
        required: true,
    },
    showAdd: {
        type: Boolean,
        default: false,
    },
    canEdit: {
        type: Boolean,
        default: false,
    },
    canDelete: {
        type: Boolean,
        default: false,
    },
    canChangeRole: {
        type: Boolean,
        default: false,
    },
    canUpdateStatus: {
        type: Boolean,
        default: false,
    },
    canFulfill: {
        type: Boolean,
        default: false,
    },
})

const hasActions = computed(
    () =>
        props.canEdit ||
        props.canDelete ||
        props.canChangeRole ||
        props.canUpdateStatus ||
        props.canFulfill,
)

function nextStatus(status) {
    if (status === 'ordered') return 'processing'
    if (status === 'processing') return 'shipped'
    if (status === 'shipped') return 'completed'
    return status
}
</script>

<style scoped lang="scss">
.admin-table {
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    overflow-x: auto;
}
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.table-title {
    font-size: $text-md;
    font-weight: 700;
    font-family: 'Bricolage Grotesque', Arial, sans-serif;
    color: #222;
}
.add-btn {
    min-width: 120px;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
}
th,
td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
}
th {
    background: #f7f8fa;
    font-weight: 600;
    color: #444;
}
tr:last-child td {
    border-bottom: none;
}
.actions {
    display: flex;
    gap: 0.5rem;
}
.empty-row {
    text-align: center;
    color: #888;
    font-style: italic;
    padding: 2rem 0;
}
</style>
